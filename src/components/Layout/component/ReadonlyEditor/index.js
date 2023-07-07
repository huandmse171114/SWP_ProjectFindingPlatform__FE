import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, ContentState, convertFromHTML  } from "draft-js";
import styles from './ReadonlyEditor.module.scss'
import classNames from "classnames/bind";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const cx = classNames.bind(styles)

export default class ReadonlyEditor extends Component {
  state = {
    editorState: EditorState.createWithContent(
      ContentState.createFromBlockArray(
        convertFromHTML(this.props.staticData || "")
      )
    ),
  };

  render() {
    const { editorState } = this.state;
    // console.log(this.props)
    return (
      <div>
        <Editor
            editorState={editorState}
            readOnly={true}
            toolbarClassName={cx("toolbarClassName")}
        />
      </div>
    );
  }
}