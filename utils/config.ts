// config.ts
export const statusConfig = {
    production: {
      statusUrl: "https://api.tryrue.com/health-check",
      name: "Production API",
      status: "healthy", // initial status
    },
    local: {
      statusUrl: "http://127.0.0.1:5003/api/health-check",
      name: "Local API",
      status: "offline", // initial status
    },
    timeline: [
      {
        date: "2024-12-27",
        status: "All Systems Operational",
        description: "Everything is running smoothly.",
        type: "success",
      },
      {
        date: "2024-12-26",
        status: "Scheduled Maintenance",
        description: "We are performing scheduled maintenance.",
        type: "maintenance",
      },
      // You can add more timeline entries here.
    ],
  };
  