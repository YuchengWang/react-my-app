import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import fs from 'fs';

export default class Home extends Component {
  getCoreDir() {
    const path = require('path');
    let userHomeDir = process.env.HOME || '~';
    
    const coreDir = path.join(userHomeDir, '.platformio');
    // if we already created it
    try {
      fs.accessSync(coreDir);
      return coreDir;
    } catch (err) { 
      console.debug(err);
    }
    // Make sure that all path characters have valid ASCII codes.
    for (const char of coreDir) {
      if (char.charCodeAt(0) > 127) {
        // If they don't, put the pio home directory into the root of the disk.
        return coreDir;
      }
    }
    return coreDir;
  }
  render() {
    return (
      <div>
        <h1>首页</h1>
        <h1>{this.getCoreDir()}</h1>
        <Link to="/list">点击跳转到列表</Link>
      </div>
    )
  }
}