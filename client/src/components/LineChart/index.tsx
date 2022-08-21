import { ChartLegendOptions, ChartOptions } from 'chart.js'
import React from 'react'
import { Line } from 'react-chartjs-2'
import { useTheme, Box } from '@mui/material';

type Props = {
    xAxisData: number[] | string[]
    yAxisData: number[]
    title?: string
    xLabel?: string
    yLabel?: string
}

const LineChart = ({ xAxisData, yAxisData, title, xLabel, yLabel }: Props) => {
    const { palette: { primary } } = useTheme();

    const legendOptions: ChartLegendOptions = {
        display: false,
    }

    const options: ChartOptions = {
        title: {
            display: !!title,
            text: title,
        },
        scales: {
            gridLines: { display: false },
            yAxes: [
                {
                    scaleLabel: { display: !!yLabel, labelString: yLabel },
                    gridLines: { display: false },
                },
            ],
            xAxes: [
                {
                    scaleLabel: { display: !!xLabel, labelString: xLabel },
                    ticks: { display: true },
                    gridLines: { display: false },
                },
            ],
        },
    }

    return (
        <Box width="60%" margin="0 auto" mt={5} data-testid="lineChart">
            <Line
                data={{
                    labels: xAxisData,
                    datasets: [
                        {
                            backgroundColor: primary.light,
                            borderColor: primary.main,
                            data: yAxisData,
                        },
                    ],
                }}
                options={options}
                legend={legendOptions}
            />
        </Box>
    )
}

export default LineChart
