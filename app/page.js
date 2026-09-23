'use client'
import { useState } from 'react'

const moods = [['😊','开心'],['🙂','平静'],['😐','一般'],['😔','低落'],['😣','焦虑']]

export default function Home(){
  const [tab,setTab]=useState('今日')
  const [mood,setMood]=useState('焦虑')
  const [level,setLevel]=useState(70)
  const [text,setText]=useState('今天项目进度延期，感觉压力很大，担心会影响最终评价。')
  const [done,setDone]=useState(false)
  const [breathing,setBreathing]=useState(false)
  const nav=['今日','写日记','调节中心','成长报告']
  return <div className="app">
    <aside><div className="brand"><b>晴</b><span>心晴 AI</span></div><nav>{nav.map(x=><button key={x} className={tab===x?'active':''} onClick={()=>setTab(x)}>{x}</button>)}</nav><div className="privacy">🔒 你的记录仅用于个人情绪觉察。<br/>心晴 AI 不替代专业医疗建议。</div></aside>
    <main><header><div><h1>晚上好，小林</h1><p>给自己一点时间，听听此刻的感受。</p></div><i>林</i></header>
    {tab==='今日'&&<><section className="topgrid"><div className="card hero"><small>DAILY CHECK-IN · 今日觉察</small><h2>今天，你感觉怎么样？</h2><div className="moods">{moods.map(([e,n])=><button key={n} onClick={()=>{setMood(n);setTab('写日记')}}><span>{e}</span>{n}</button>)}</div></div><div className="card score"><div className="title"><h3>今日情绪指数</h3><em>状态良好</em></div><div className="scorebody"><div className="ring"><b>72</b></div><div><strong>平稳回升</strong><p className="up">↑ 8 相比昨天</p><p>已连续记录 6 天</p></div></div></div></section><section className="card insight"><small>AI 今日洞察</small><p>今天的压力主要来自工作任务和结果的不确定性。你已经比昨天更平静了，晚间可以用一次短时呼吸练习结束忙碌。</p><div><em>#工作压力</em><em>#任务进度</em><em>#正在恢复</em></div></section><section className="three"><div className="card trend"><div className="title"><h3>近 7 天情绪趋势</h3><button onClick={()=>setTab('成长报告')}>查看报告</button></div><svg viewBox="0 0 500 150"><path d="M15 115L90 98 165 107 240 67 315 80 390 52 485 38V140H15Z" fill="#7773f025"/><path d="M15 115L90 98 165 107 240 67 315 80 390 52 485 38" fill="none" stroke="#5b58e8" strokeWidth="3"/></svg></div><Care icon="◉" title="3 分钟呼吸" text="跟随节奏慢下来，适合当前轻度压力状态。" action="开始练习" onClick={()=>setBreathing(true)}/><Care icon="↗" title="下班散步" text="15 分钟低强度运动，帮助大脑从任务中切换。" action="加入今晚计划"/></section></>}
    {tab==='写日记'&&<section className="journal"><div className="card"><div className="title"><h2>记录此刻</h2><em>约 1 分钟</em></div><label>主要情绪</label><div className="options">{moods.map(([e,n])=><button key={n} className={mood===n?'picked':''} onClick={()=>setMood(n)}>{e} {n}</button>)}</div><div className="range"><label>情绪强度</label><b>{level}</b></div><input type="range" value={level} onChange={e=>setLevel(e.target.value)}/><label>发生了什么？</label><textarea value={text} onChange={e=>setText(e.target.value)}/><div className="actions"><button onClick={()=>setText('')}>清空</button><button className="primary" onClick={()=>setTimeout(()=>setDone(true),500)}>保存并分析</button></div></div><div className="card result">{!done?<div className="empty"><span>✦</span><b>等待你的记录</b><p>AI 会识别主要情绪、梳理触发因素，<br/>再给出一条轻量可行的建议。</p></div>:<><div className="title"><h2>AI 情绪分析</h2><em>已完成</em></div><p>当前主要情绪</p><div className="emotion"><h2>焦虑</h2><b>78%</b></div><div className="meter"><i/></div><h3>可能的触发因素</h3><ul><li>项目进度出现延期</li><li>对结果和评价存在不确定感</li><li>对自身表现要求较高</li></ul><h3>给此刻的你</h3><p>先把“可控”和“不可控”的部分分别列下来。今晚只推进一个最小任务，再给自己 10 分钟彻底离开屏幕。</p></>}</div></section>}
    {tab==='调节中心'&&<><div className="pageTitle"><h2>调节中心</h2><p>先做一件让身体松一点的小事。</p></div><section className="three"><Care icon="◉" title="3 分钟呼吸练习" text="4 秒吸气，4 秒呼气，让注意力回到身体。" action="立即开始" onClick={()=>setBreathing(true)}/><Care icon="♫" title="自然声音" text="雨声与林间白噪音，适合从高密度工作中抽离。" action="播放 10 分钟"/><Care icon="↗" title="轻松散步" text="不设步数目标，只用 15 分钟观察身边的光线与声音。" action="加入计划"/></section></>}
    {tab==='成长报告'&&<><div className="pageTitle"><h2>我的成长报告</h2><p>9 月 16 日—9 月 22 日</p></div><section className="stats"><Stat t="平均情绪指数" n="72" d="↑ 6 较上周"/><Stat t="连续记录" n="6 天" d="本周完成 86%"/><Stat t="调节后平均提升" n="18%" d="运动效果最明显"/></section><section className="topgrid"><div className="card"><div className="title"><h3>情绪来源分布</h3><em>AI 归因</em></div>{[['工作任务',72],['人际关系',38],['睡眠状态',29],['未来规划',24]].map(([n,v])=><div className="bar" key={n}><span>{n}</span><i><b style={{width:v+'%'}}/></i><strong>{v}%</strong></div>)}</div><div className="card finding"><small>本周发现</small><h2>你在运动后的情绪评分，平均提升了 18%</h2><p>周三和周六的散步记录都对应了明显回升。下周可以保留 2 次短时散步，不必追求强度。</p><em>有效习惯</em> <em>继续保持</em></div></section></>}
    </main>{breathing&&<div className="overlay"><div className="breathe"><small>呼吸练习</small><h2>慢慢吸气</h2><div className="orb"/><p>跟随圆球的节奏，吸气 4 秒 · 呼气 4 秒</p><button onClick={()=>setBreathing(false)}>结束练习</button></div></div>}
  </div>
}
function Care({icon,title,text,action,onClick}){return <div className="card care"><div><i>{icon}</i><h3>{title}</h3><p>{text}</p></div><button className={action.includes('开始')?'primary':''} onClick={onClick}>{action}</button></div>}
function Stat({t,n,d}){return <div className="card stat"><span>{t}</span><b>{n}</b><p>{d}</p></div>}
