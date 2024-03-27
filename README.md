# Streak-Reminder

Streak-Reminder is a Next.js application designed to help users maintain their daily coding practice streak by reminding them to solve problems on LeetCode and Codeforces platforms. It integrates with the LeetCode and Codeforces APIs to check the user's last submissions and sends reminders accordingly via Telegram.

## Features

- **Daily Reminder**: The app runs a single cron job on a daily basis to check the user's last submissions on LeetCode and Codeforces.

- **Telegram Integration**: Sends reminders via Telegram, allowing users to receive notifications directly to their messaging app.

- **LeetCode and Codeforces API Integration**: Integrates with the LeetCode and Codeforces APIs to fetch the user's last submissions and determine if they have practiced DSA/CP questions.

- **Tailwind CSS**: Styled using Tailwind CSS, providing a modern and responsive user interface.

- **TypeScript**: Written in TypeScript for improved type safety and developer experience.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/streak-reminder.git

   ```

2. Navigate to the project directory:

   ```bash
   cd streak-reminder

   ```

3. Install dependencies

   ```bash
   npm install

   ```

## Configuration

1. **Set up environment variables**:

   - Create a `.env` file in the root of the project.
   - Define environment variables for your Telegram bot token and chat ID:

     ```plaintext
     TELEGRAM_BOT_TOKEN=your_telegram_bot_token
     TELEGRAM_CHAT_ID=your_telegram_chat_id
     ```

2. **Modify the cron job (optional)**:

   - Open the `vercel.json` file.
   - Update the `crons` section to configure the cron jobs:

     ```json
      {
         "crons": [
            {
            "path": "/api/cron",
            "schedule": "0 18 * * *"
            }
         ]
      }
     ```

## Usage

1. **Start the development server**:

   ```bash
   npm run dev

   ```

2. Open your browser and navigate to http://localhost:3000 to view the application.

3. The cron job will run automatically on a daily basis to check the user's last submissions and send reminders via Telegram

## Contributing

**Contributions are welcome! Please feel free to submit issues or pull requests.**
