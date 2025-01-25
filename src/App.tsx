import './App.css'
import { UAParser } from 'ua-parser-js';

function App() {

  const {
    browser,
    device,
    engine,
    os,
    ua,
  } = UAParser();
  return (
    <>
      <div>字体大小支持检测</div>
      <div style={{ fontSize: '1px' }} >1px</div>
      <div style={{ fontSize: '2px' }} >2px</div>
      <div style={{ fontSize: '3px' }} >3px</div>
      <div style={{ fontSize: '4px' }} >4px</div>
      <div style={{ fontSize: '5px' }} >5px</div>
      <div style={{ fontSize: '6px' }} >6px</div>
      <div style={{ fontSize: '7px' }} >7px</div>
      <div style={{ fontSize: '8px' }} >8px</div>
      <div style={{ fontSize: '9px' }} >9px</div>
      <div style={{ fontSize: '10px' }} >10px</div>
      <div style={{ fontSize: '11px' }} >11px</div>
      <div style={{ fontSize: '12px' }} >12px</div>
      <div style={{ fontSize: '13px' }} >13px</div>
      <div style={{ fontSize: '14px' }} >14px</div>
      <div style={{ fontSize: '15px' }} >15px</div>
      <div style={{ fontSize: '16px' }} >16px</div>
      <div style={{ height: '30px' }} />
      <div>浏览器信息</div>
      <div>{`${browser.name} ${browser.version}`}</div>
      <div>{`${device.vendor} ${device.model}`}</div>
      <div>{`${engine.name} ${engine.version}`}</div>
      <div>{`${os.name} ${os.version}`}</div>
      <div style={{ maxWidth: screen.availWidth * 0.5 }}>{ua}</div>
    </>
    
  )
}

export default App
