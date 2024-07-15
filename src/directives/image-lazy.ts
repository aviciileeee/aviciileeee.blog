// Copyright (c) 2024 Aviciileeee<lx_ashin@aliyun.com>
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { useIntersectionObserver } from '@vueuse/core'
export default {
  mounted(el: HTMLImageElement) {
    const imgUrl = el.src
    el.src = '' // 占位图待上传
    const { stop } = useIntersectionObserver(el, ([{ isIntersecting}], observerElement) => {
      if(isIntersecting) {
        el.src = imgUrl
        stop()
      }
    })
  }
}