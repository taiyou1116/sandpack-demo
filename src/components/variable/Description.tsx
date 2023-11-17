import React from 'react'

function Description() {
  return (
    <div className=' p-5'>
      <div className=' text-gray-300'>ここに進捗度</div>
      <h1 className=' text-gray-300 font-bold m-10'>議題</h1>
        <div className=' flex flex-col gap-5'>
        {/* 親の要素によってループで表示する */}
          <p className=' text-gray-300'>
            四角形の形を変えてみよう
          </p>
          <p className=' text-gray-300'>
            画面にHello Worldと表示してみよう
          </p>
          <p className=' text-gray-300'>
            やること3
          </p>
        </div>
      </div>
  )
}

export default Description