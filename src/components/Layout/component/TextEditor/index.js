import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import styles from './TextEditor.module.scss'
import classNames from "classnames/bind";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

const cx = classNames.bind(styles)

export default class TextEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
    this.props.setState(draftToHtml(convertToRaw(editorState.getCurrentContent())))
  };

  render() {
    const { editorState } = this.state;
    // console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    return (
      <div>
        <Editor
            editorState={editorState}
            toolbarClassName={cx("toolbarClassName")}
            wrapperClassName={cx("wrapperClassName")}
            editorClassName={cx("editorClassName")}
            onEditorStateChange={this.onEditorStateChange}
        />
      </div>
    );
  }
}