/*
 * @Author: yanghongxuan
 * @Date: 2022-02-10 14:56:24
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2022-03-16 09:36:34
 * @Description:
 * @FilePath: /vuepress/docs/.vuepress/config.ts
 */
import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import pluginFullTextSearch from 'vuepress2-plugin-full-text-search'

export default defineUserConfig<DefaultThemeOptions>({
  title: 'helloword',
  description: 'helloword',
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png'
  },
  plugins: [[pluginFullTextSearch]]
})
