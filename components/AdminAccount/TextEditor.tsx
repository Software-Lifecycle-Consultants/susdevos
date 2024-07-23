'use client';

import parse from 'html-react-parser';
import React, { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = () => {
  const [body, setBody] = useState('');
  const [submittedContent, setSubmittedContent] = useState('');

  const handleBody = (e: string) => {
    setBody(e);
  };

//   const handleSubmit = () => {
//     setSubmittedContent(body);
//     console.log(body);
//     console.log(parse(body));
//   };

  return (
    <>
      <div>
        <ReactQuill
          placeholder="Write something..."
          modules={TextEditor.modules}
          formats={TextEditor.formats}
          onChange={handleBody}
          value={body}
          className="w-[512px] h-[154px] text-slate-800 border-2 border-slate-300 focus:bg-white outline-none rounded-lg border-none"
        />
      </div>
      {/* <button onClick={handleSubmit}>Submit</button> */}
      {/* <div className="ql-editor">{parse(submittedContent)}</div> */}
    </>
  );
};

TextEditor.modules = {
  toolbar: [
    // [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      //   { indent: '-1' },
      //   { indent: '+1' },
    ],
    // ["link", "image", "video"],
    // ["clean"],
    // [
    //   { align: "" },
    //   { align: "center" },
    //   { align: "right" },
    //   { align: "justify" },
    // ],
  ],
};

TextEditor.formats = [
  //   "header",
  'font',
  'size',
  'bold',
  'italic',
  //   "underline",
  //   "strike",
  //   "blockquote",
  'list',
  'bullet',
  //   "indent",
  //   "link",
  //   "image",
  //   "video",
  //   "align",
];

export default TextEditor;
