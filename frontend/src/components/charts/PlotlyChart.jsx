import React from 'react';
import Plot from 'react-plotly.js';

export function PlotlyChart({ data, layout, config, style, useResizeHandler = true }) {
    const defaultLayout = {
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        font: {
            family: 'JetBrains Mono, monospace',
            color: '#94a3b8'
        },
        xaxis: {
            gridcolor: 'rgba(255,255,255,0.05)',
            zerolinecolor: 'rgba(255,255,255,0.05)',
        },
        yaxis: {
            gridcolor: 'rgba(255,255,255,0.05)',
            zerolinecolor: 'rgba(255,255,255,0.05)',
        },
        margin: { t: 30, r: 20, l: 40, b: 40 },
        autosize: true,
        ...layout
    };

    const defaultConfig = {
        responsive: true,
        displayModeBar: false,
        ...config
    };

    return (
        <Plot
            data={data}
            layout={defaultLayout}
            config={defaultConfig}
            style={{ width: '100%', height: '100%', ...style }}
            useResizeHandler={useResizeHandler}
        />
    );
}
