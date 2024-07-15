// Copyright (c) 2024 Aviciileeee<lx_ashin@aliyun.com>
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { type App } from 'vue'
import imageLazy  from './image-lazy'
export default {
  install(app: App) {
    app.directive('imgLazy', imageLazy)
  }
}