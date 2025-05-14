import { Settings } from "lucide-react"

interface CircularFeatureIconProps {
  number: string | number
  mainColor?: string
  borderColor?: string
  iconColor?: string
  size?: number
}

export default function FeatureNumbering({
  number,
  mainColor = "#3B82F6", // blue-500
  borderColor = "#7C3AED", // purple-600
  iconColor = "#7C3AED", // purple-600
  size = 200,
}: CircularFeatureIconProps) {
  // Calculate dimensions based on size
  const mainCircleRadius = size * 0.35
  const borderWidth = size * 0.06
  const gearCircleRadius = size * 0.15
  const center = size / 2
  const gearCirclePosition = {
    x: center + mainCircleRadius * 0.7,
    y: center - mainCircleRadius * 0.7,
  }

  // Calculate the arc path for the partial circle
  const getArcPath = (radius: number) => {
    const startAngle = -30 // degrees
    const endAngle = 270 // degrees

    // Convert angles to radians
    const startRad = (startAngle * Math.PI) / 180
    const endRad = (endAngle * Math.PI) / 180

    // Calculate start and end points
    const startX = center + radius * Math.cos(startRad)
    const startY = center + radius * Math.sin(startRad)
    const endX = center + radius * Math.cos(endRad)
    const endY = center + radius * Math.sin(endRad)

    // Create the arc flag (0 for minor arc, 1 for major arc)
    const arcFlag = endAngle - startAngle <= 180 ? "0" : "1"

    // Create the SVG path
    return `M ${startX} ${startY} A ${radius} ${radius} 0 ${arcFlag} 1 ${endX} ${endY}`
  }

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Partial circle border */}
        <path
          d={getArcPath(mainCircleRadius + borderWidth / 2)}
          fill="none"
          stroke={borderColor}
          strokeWidth={borderWidth}
          strokeLinecap="round"
        />

        {/* Main circle */}
        <circle cx={center} cy={center} r={mainCircleRadius} fill={mainColor} />

        {/* Gear circle */}
        <circle cx={gearCirclePosition.x} cy={gearCirclePosition.y} r={gearCircleRadius} fill={mainColor} />

        {/* Number text */}
        <text
          x={center}
          y={center}
          textAnchor="middle"
          dominantBaseline="central"
          fill="white"
          fontSize={mainCircleRadius * 0.7}
          fontWeight="bold"
        >
          {number.toString().padStart(2, "0")}
        </text>
      </svg>

      {/* Gear icon */}
      <div
        className="absolute flex items-center justify-center"
        style={{
          top: gearCirclePosition.y - gearCircleRadius * 0.7,
          left: gearCirclePosition.x - gearCircleRadius * 0.7,
          width: gearCircleRadius * 1.4,
          height: gearCircleRadius * 1.4,
        }}
      >
        <Settings className="w-full h-full" fill={iconColor} stroke={iconColor} />
      </div>
    </div>
  )
}
