export default function WinterBanner() {
  return (
    <div
      className="relative overflow-hidden bg-blue-50 border-2 border-blue-300 rounded-lg px-3 py-2 mt-3"
      role="alert"
      aria-live="polite"
    >
      {/* Snowflake decorations */}
      <div className="absolute inset-0 opacity-60 text-blue-600" aria-hidden="true">
        <span className="absolute text-4xl top-2 left-60">❄️</span>
        <span className="absolute text-3xl top-1 right-8">❄️</span>
        <span className="absolute text-2xl bottom-2 left-1/4">❄️</span>
        <span className="absolute text-3xl bottom-0 right-1/3">❄️</span>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-lg font-semibold mb-2 flex items-center">
          <span className="text-2xl mr-2 bg-black rounded-lg px-1" aria-hidden="true">
            ❄️
          </span>
          Winter Notice
        </h2>
        <p className="text-base">
          {'Many bike clubs take a break or reduce their ride schedule during winter months. '}
          {'The information below may not reflect current winter activities. '}
          {'Check each groups social media or website for their latest winter updates.'}
        </p>
      </div>
    </div>
  );
}
