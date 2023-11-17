import React from 'react'
import Templete from '../components/Templete'

const files = {

}

export default function Home() {
  return (
    <div>
      <Templete 
        files={files}
        visibleFiles={["App.js", "player.js"]}
        activeFile='App.js'
      />
    </div>
  )
}
