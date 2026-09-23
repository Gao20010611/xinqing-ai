import './globals.css'

export const metadata = {
  title: '心晴 AI · 情绪管理助手',
  description: '记录情绪，理解原因，找到适合自己的调节方式。'
}

export default function RootLayout({ children }) {
  return <html lang="zh-CN"><body>{children}</body></html>
}
