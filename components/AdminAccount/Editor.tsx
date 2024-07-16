import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { $createTextNode, $getRoot, EditorState } from 'lexical';
import React from 'react'

const theme = {

};

// function MyHeadingPlugin(): JSX.Element {
//   const [editor] = useLexicalComposerContext();
//   const onClick = (e: React.MouseEvent): void => {
//     editor.update(() => {
//       const root = $getRoot();
//       root.append($createHeadingNode('h1').append($createTextNode('Hello world')));
//     });
//   };
//   return <button onClick={onClick}>Heading</button>;
// }

function onError(error: Error): void {
    console.error(error);
  }

function MyOnChangePlugin(props: {
    onChange: (editorState: EditorState) => void;
  }): null {
    const [editor] = useLexicalComposerContext();
    const { onChange } = props;
    React.useEffect(() => {
      return editor.registerUpdateListener(({ editorState }) => {
        onChange(editorState);
      });
    }, [onChange, editor]);
    return null;
  }

export default function Editor():JSX.Element {
    const initialConfig = {
        namespace: 'MyEditor',
        theme,
        onError,
        nodes: [
            // HeadingNode
        ]
      };

  return (
    <div className="relative bg-orange-300 p-1">
          <LexicalComposer initialConfig={initialConfig}>
            {/* <MyHeadingPlugin /> */}
            <RichTextPlugin
              contentEditable={
                <ContentEditable className="p-2 h-20 w-80 bg-white" />
              }
              placeholder={
                <div className="absolute left-0 top-0 p-2">
                  Enter some text...
                </div>
              }
              ErrorBoundary={LexicalErrorBoundary}
            />

            <HistoryPlugin />
            <MyOnChangePlugin
              onChange={(editorState) => {
                console.log(editorState);
              }}
            />
          </LexicalComposer>
        </div>
  )
}

