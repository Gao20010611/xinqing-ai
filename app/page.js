
"use client";
import {useState} from "react";

export default function Home(){
 const [text,setText]=useState("");
 const [emotion,setEmotion]=useState("焦虑");
 const [show,setShow]=useState(false);

 return <main style={{maxWidth:900,margin:"40px auto",fontFamily:"sans-serif"}}>
 <h1>🌤 心晴 AI</h1>
 <p>记录此刻情绪，理解背后的原因，找到适合自己的调节方式。</p>

 <section>
 <h2>今日情绪</h2>
 {["😊 开心","🙂 平静","😐 普通","😔 低落","😣 焦虑"].map(x=>
 <button onClick={()=>setEmotion(x)} style={{margin:5}}>{x}</button>)}
 <p>当前选择：{emotion}</p>
 </section>

 <section>
 <h2>情绪日记</h2>
 <textarea rows="5" style={{width:"100%"}} 
 placeholder="例如：今天项目进度延期，感觉压力很大..."
 value={text} onChange={e=>setText(e.target.value)}/>
 <br/>
 <button onClick={()=>setShow(true)}>AI分析</button>
 </section>

 {show && <section>
 <h2>🤖 AI情绪分析</h2>
 <h3>情绪识别</h3>
 <p>当前主要情绪：焦虑（78%）</p>
 <p>辅助情绪：压力（15%）、担忧（7%）</p>

 <h3>可能触发因素</h3>
 <ul>
 <li>工作任务延期</li>
 <li>对结果的不确定性</li>
 <li>对自我能力的担忧</li>
 </ul>

 <h3>AI自我关怀建议</h3>
 <p>🌱 3分钟呼吸练习：当前压力较高，可以尝试短暂放松。</p>
 <p>🎵 推荐：Lo-fi Relax、自然声音</p>
 <p>🏃 推荐：散步15分钟，帮助缓解短期压力。</p>

 <h2>📈 过去7天情绪报告</h2>
 <p>平均情绪：72分</p>
 <p>高频情绪：焦虑</p>
 <p>主要触发：工作任务</p>
 <p>改善建议：运动后的情绪评分平均提升18%。</p>
 </section>}
 </main>
}
