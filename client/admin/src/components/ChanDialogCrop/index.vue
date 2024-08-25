<template>
  <el-dialog v-model="dialogFormVisible" title="裁剪图片" width="80%">

    <div class="w-full pos-r">
      <cropper ref="cropper" :src="img" :stencil-props="aspect" image-restriction="stencil" :autoZoom="true"
        @change="change">
      </cropper>

      <div class="info pos-a">
        <p>宽度：{{ info.width }}</p>
        <p>高度：{{ info.height }}</p>
        <p>距左：{{ info.left }}</p>
        <p>距顶：{{ info.top }}</p>
      </div>
    </div>


    <el-radio-group v-model="aspectRatio" @change="handleChange">
      <el-radio value="1:1" size="large">1:1</el-radio>
      <el-radio value="2:1" size="large">2:1</el-radio>
      <el-radio value="4:3" size="large">4:3</el-radio>
      <el-radio value="16:9" size="large">16:9</el-radio>
      <el-radio value="auto" size="large">自由</el-radio>
    </el-radio-group>

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="crop">
          确认
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script>
import { Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css';
export default {
  name: 'ChanDialogCrop',
  components: {
    Cropper
  },
  props: {
    img: {
      type: String,
      default: ''
    },
    file: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      aspect: {
        aspectRatio: 1 / 1,
      },
      aspectRatio: '1:1',
      rotate: 0,
      info: {},
      dialogFormVisible: false
    }
  },
  methods: {
    change(obj) {
      console.log(obj);
      this.info = obj.coordinates;
    },
    handleChange(v) {
      console.log(typeof v)
      if (v == 'auto') {
        this.aspect = {};
        return
      }
      const aspect = v.split(':').map(item => Number(item))
      this.aspect = {
        aspectRatio: aspect[0] / aspect[1],
      }
      console.log(aspect, aspect[0] / aspect[1])
    },
    rotateLeft() {
      this.rotate -= 90
    },
    rotateRight() {
      this.rotate += 90
    },
    setAspectRatio(aspect) {
      const aspectArr = aspect.split(',').map(item => Number(item))
      this.aspect = {
        aspectRatio: aspect[0] / aspect[1],
      }
      console.log(aspect, aspect[0] / aspect[1])
    },
    open() {
      this.dialogFormVisible = true
    },
    close() {
      this.dialogFormVisible = false
      this.$emit('crop');
    },

    rotateLeft() {
      this.$refs.cropper.rotate(this.rotate -= 10);
    },

    rotateRight() {
      this.$refs.cropper.rotate(this.rotate += 10);
    },

    crop() {
      const { canvas, coordinates:{width,height},image:{scaleX,scaleY,src} } = this.$refs.cropper.getResult();
      canvas.width = 100;
  canvas.height = 100;

  // 重新绘制图像
  canvas.getContext('2d').drawImage(src, 0, 0, 100,100);

      canvas.toBlob((blob) => {
        let file = new File([blob], this.file.name, { type: this.type })
        // 获取文件大小（以字节为单位）
        const fileSizeInBytes = file.size;
        // 转换为 KB
        const fileSizeInKB = fileSizeInBytes / 1024;
        console.log('Cropped File Size:', fileSizeInKB.toFixed(2), 'KB');
        this.$emit('crop', file);
      }, { quality: 0.001 })
      this.dialogFormVisible = false
    }
  }
}
</script>

<style scoped>
.info {
  z-index: 10;
  right: 0;
  top: 0;
  background-color: rgba(255, 255, 255, 0.05);
  color: #fff;
  padding: 10px;
  border-bottom-left-radius: 4px;
}
</style>
