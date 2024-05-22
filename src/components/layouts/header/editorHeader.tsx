"use client";
import React, { useState } from 'react';
import EditorSearchBar from '../../elements/search/editorSerch'; // 検索バーのインポート

const EditorHeader = () => {
    return (
        <header className="w-full p-2 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-between">
            <div className="flex items-center justify-start">
            <li style={{ listStyleType: "none" }}>
                <button className="text-white hover:bg-gray-200 hover:bg-opacity-50 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    ファイル
                </button>
            </li>
            </div>
            <div className="flex-grow flex items-center justify-center">
                <EditorSearchBar /> {/* 検索バーをヘッダーに追加 */}
            </div>
            <div className="flex items-center justify-end">
            </div>
        </header>
    );
};

export default EditorHeader;
