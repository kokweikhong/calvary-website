type LoadingStateProps = {
  message?: string;
};

const LoadingState = ({ message }: LoadingStateProps) => {
  return (
    <div className="flex min-h-100 flex-col items-center justify-center py-16">
      {/* Animated Spinner */}
      <div className="relative mb-6">
        {/* Outer rotating ring */}
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-200 border-t-calvarycomposite"></div>

        {/* Inner pulsing circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-8 w-8 animate-pulse rounded-full bg-calvarycomposite/20"></div>
        </div>
      </div>

      {/* Loading Text */}
      <p className="animate-pulse text-lg font-medium text-gray-700">
        {message || "Loading..."}
      </p>

      {/* Loading Dots Animation */}
      <div className="mt-4 flex space-x-2">
        <div className="h-2 w-2 animate-bounce rounded-full bg-calvarycomposite [animation-delay:-0.3s]"></div>
        <div className="h-2 w-2 animate-bounce rounded-full bg-calvarycomposite [animation-delay:-0.15s]"></div>
        <div className="h-2 w-2 animate-bounce rounded-full bg-calvarycomposite"></div>
      </div>
    </div>
  );
};

export default LoadingState;
