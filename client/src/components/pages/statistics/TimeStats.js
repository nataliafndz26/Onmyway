import { ResponsivePie } from '@nivo/pie'

const TimePie = ({ ShortPeriod, MediumPeriod, LongPeriod}) => (
    
    <ResponsivePie
        data={
            [
            {
                "id": "0-6 months",
                "label": "0-6 months",
                "value": `${ShortPeriod}`,
                "color": "hsl(341, 70%, 50%)"
            },
            {
                "id": "6 months-1 year",
                "label": "6 months-1 year",
                "value": `${MediumPeriod}`,
                "color": "hsl(52, 70%, 50%)"
            },
            {
                "id": "More than 1 year",
                "label": "More than 1 year",
                "value": `${LongPeriod}`,
                "color": "hsl(52, 70%, 50%)"
            },
  
            ]
            
        }
        margin={{ top: -140, right: 110, bottom: 80, left: 110 }}
        valueFormat=" >-.0%"
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: 'paired' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextColor="#333333"
        radialLabelsLinkColor={{ from: 'color' }}
        sliceLabelsSkipAngle={10}
        sliceLabelsTextColor="#333333"
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: ''
                },
                id: 'dots'
            },
            {
                match: {
                    id: ''
                },
                id: 'dots'
            },
            {
                match: {
                    id: ''
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'column',
                justify: false,
                translateX: -160,
                translateY: -25,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 22,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
)

export default TimePie