import React from 'react';
import { Button } from 'react-bootstrap';

const Resume = () => {
    return (
        <div>
            <Button target="_blank" href="https://drive.google.com/file/d/1MD7KtIoMcxQtXTMzjNUkHx3ow49S_k8_/view?usp=sharing" download="proposed_file_name">Download Resume</Button>
        </div>
    );
};

export default Resume;