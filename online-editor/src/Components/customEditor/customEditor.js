import React, { Component, Fragment } from 'react';
import AceEditor from 'react-ace';
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/snippets/javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-emmet";
import './editor.css';
import Toolbar from '../toolbar/toolbar';



export default class CustomEditor extends Component {

    aceRef = null


    onFileUpload = (file) => {
        var fileName = file.name;
        var reader = new FileReader();

        console.log(file)

        reader.onload = (e) => {
            this.aceRef = this.refs.aceEditor;
            console.log(this.aceRef)
            this.aceRef.editor.setValue(e.target.result);
        }

        reader.readAsText(file, "UTF-8");
    }

    constructor() {
        super()
        this.state = {

        }
    }


    render() {
        return (
            <Fragment>
                <Toolbar onFileUpload={this.onFileUpload} />
                <AceEditor
                ref="aceEditor"
                placeholder="Start writing magic!"
                mode="javascript"
                theme="monokai"
                name="mainEditor"
                width="100vw"
                height="100vh"
                onLoad={this.onLoad}
                onChange={this.onChange}
                fontSize={12}
                showPrintMargin={false}
                showGutter={true}
                highlightActiveLine={true}
                value={`console.log("Hello World!")`}
                setOptions={{
                enableBasicAutocompletion: true,
                enableEmmet: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,   
                showLineNumbers: true,
                tabSize: 2,
                }}/>
            </Fragment>      
        )
    }

}