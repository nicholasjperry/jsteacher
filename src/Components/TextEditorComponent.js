import React, { useState, useEffect } from 'react';
import Editor from './EditorComponent';
import useLocalStorage from '../hooks/useLocalStorage';
import { Container, Row, Col, Button } from 'reactstrap';

function TextEditor() {
  const [html, setHtml] = useLocalStorage('html', '');
  const [css, setCss] = useLocalStorage('css', '');
  const [js, setJs] = useLocalStorage('js', '');
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js]);

  return (
    <>
      <Container className="full-page">
        <Row>
          <Col xs={12} sm={12} md={6} className="pane left-pane">
            <Editor
            language="javascript"
            displayName="JS"
            value={js}
            onChange={setJs}
          />
          </Col>
          <Col xs={12} sm={12} md={5} className="pane right-pane">
            <iframe
              srcDoc={srcDoc}
              title="output"
              sandbox="allow-scripts"
              frameBorder="0"
              width="100%"
              height="100%"
            >
            </iframe>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button>Submit</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default TextEditor;