import { renderStatic } from 'glamor/server';
import { style } from 'glamor';
import { containerStyle, buttonStyles } from '../styles';
import { renderHtml, renderBody } from '../render';

export const glamorCase = (caseName) => {

    const getButtonClassName = i => style(buttonStyles[i]);

    const { html, css } = renderStatic(() =>
        renderBody(caseName, style(containerStyle), getButtonClassName)
    );


    return renderHtml(css, html);
};
