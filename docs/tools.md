# Tools in Sage

Sage comes with several integrated tools that enhance your AI interactions. Each tool is designed to provide specific functionality within your conversations.

## Calculator Tool

The Calculator tool allows you to perform calculations directly in your chat conversations. This tool is built into Sage and requires no additional API keys or setup.

### Features
- Basic arithmetic operations (addition, subtraction, multiplication, division)
- Complex mathematical calculations (exponents, roots, trigonometry)
- Results integrated into chat flow
- No external API dependencies

### Usage
1. Type your calculation query (e.g., "Calculate 15% of 85" or "What's the square root of 144?")
2. The Calculator tool will automatically process mathematical expressions
3. Results appear inline with your conversation

### Limitations
- Handles up to 15 decimal places
- Maximum number size: 1e308
- Supports standard mathematical notation

## Web Search Tool

Access real-time information from the internet without leaving your chat. This tool requires a Serper API key for web search functionality.

### API Key Setup
1. Visit [serper.dev](https://serper.dev) to create an account
2. Generate your API key from the dashboard
3. In Sage Settings, navigate to "Tool Configuration"
4. Enter your Serper API key in the Web Search section
5. Test the connection using the "Test Search" button

### Features
- Real-time web searches powered by Serper API
- Relevant snippets and summaries
- Source attribution with clickable links
- Safe search filtering
- Multiple search regions support

### Usage
1. Ask questions that require current information
2. The Web Search tool will gather relevant data using your Serper API key
3. Results are presented in a clear, readable format with source links

### Rate Limits
- Depends on your Serper API plan
- Free tier: 1,000 searches per month
- Check [serper.dev/pricing](https://serper.dev/pricing) for current limits

## Tool Integration

All tools are seamlessly integrated into the chat interface:
- Automatic tool selection based on your query
- Consistent response format
- Easy-to-read results
- Ability to follow up on tool responses

## Next Steps
- Check the [FAQ](./faq.md) for common tool-related questions
- Return to [Usage](./usage.md) for general app features
- Visit [Getting Started](./getting-started.md) for setup instructions
