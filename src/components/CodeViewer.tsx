import { useSandpack } from "@codesandbox/sandpack-react";
import React, { useEffect, useState } from 'react';
 
const SimpleCodeViewer = () => {
  const { sandpack } = useSandpack();
  const { files, activeFile } = sandpack;

  // squareXの値を状態として保持
  const [squareX, setSquareX] = useState<string | null>(null);
 
  const code = files[activeFile].code;

  // squareXの値の変更を監視
  useEffect(() => {
    // アクティブなファイルがsquare.jsかどうかを確認
    if (activeFile.includes('square.js')) {
      // squareXの値を解析する
      const match = code.match(/let squareX = (\d+);/);
      const newValue = match ? match[1] : null;

      // squareXの値が変更されたかチェック
      if (newValue !== squareX) {
        console.log('squareXの値が変更されました:', newValue);
        setSquareX(newValue);
      }
    }
  }, [code, squareX, activeFile]);



  return <pre>{code}</pre>;
};

export default SimpleCodeViewer;