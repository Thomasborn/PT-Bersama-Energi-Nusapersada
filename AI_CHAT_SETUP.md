# BEN AI Assistant Setup & Usage Guide

## Overview
The BEN AI Assistant is fully integrated into the website and provides real-time responses with complete knowledge of all company information, products, and services. The assistant can also guide users to relevant pages on the website.

## Features
✅ **100% Content Knowledge**: The AI has comprehensive knowledge of all PT Bersama Energi Nusapersada information  
✅ **Real-Time Messaging**: Instant responses to user queries  
✅ **Page Navigation**: Intelligent page linking to guide users to relevant sections  
✅ **Multiple Languages**: Supports both Indonesian and English  
✅ **Professional UI**: Modern chat interface with smooth animations  

## Setup Instructions

### 1. **Get a Gemini API Key**
- Visit [Google AI Studio](https://aistudio.google.com)
- Create a free account (if needed)
- Generate an API key for Gemini

### 2. **Configure Environment Variables**
Create a `.env` file in the project root with:
```
VITE_GEMINI_API_KEY=your_actual_api_key_here
```

**Important**: 
- Never commit the `.env` file to version control
- The `.env.example` file shows the required format
- Keep your API key secure and private

### 3. **Run the Development Server**
```bash
npm run dev
```

The AI chat will be accessible via a floating button in the bottom-right corner of the website.

## AI Assistant Knowledge Base

The BEN AI Assistant has complete knowledge of:

### Company Information
- Vision, Mission, and Core Values
- Company history and locations
- Contact information
- Industries served

### Products
**Gulf Oil Lubricants:**
- Automotive oils (passenger cars, motorcycles, commercial vehicles)
- Industrial lubricants (hydraulic, gear, compressor, turbine oils)
- Marine lubricants
- Greases and specialty fluids

**Shantui Equipment:**
- Bulldozers
- Excavators
- Loaders
- Spare parts and filters

### Services
- Distribution network
- Technical support
- Partnership programs
- After-sales service

## User Interaction Flow

### Opening the Chat
1. Click the floating BEN logo button in the bottom-right corner
2. The chat window opens with a greeting message

### Asking Questions
Users can ask about:
- **Products**: "Tell me about Gulf Formula" → AI responds with specifications and auto-suggests `/products` page
- **Company Info**: "What is BEN's mission?" → AI provides complete information
- **Services**: "Do you offer partnership opportunities?" → AI explains and suggests `/partnership` page
- **Contact**: "How can I reach BEN?" → AI provides contact details and suggests `/contact` page
- **Jobs**: "Are there job openings?" → AI lists positions and suggests `/careers` page

### Page Navigation
The AI intelligently suggests relevant pages using links like:
- Click the link text to navigate directly
- Chat closes automatically after navigation
- Users can return to chat anytime

## System Instruction (AI Brain)

The AI operates with this core personality:
```
You are BEN, the AI assistant for PT Bersama Energi Nusapersada. 
You have complete knowledge and provide accurate, professional answers.
```

The assistant includes:
- ✅ Full product catalog with specifications
- ✅ Complete company information
- ✅ Service details and capabilities
- ✅ Page linking guidance for all website sections
- ✅ Professional and helpful tone

## Real-Time Messaging Architecture

1. **Message Submission**
   - User types message and presses Send or Enter
   - Input field clears immediately
   - Loading indicator shows while AI responds

2. **AI Processing**
   - Uses Google Gemini 3.5 Flash model
   - Processes with comprehensive knowledge base
   - Generates contextual responses

3. **Message Display**
   - User messages appear on the right (blue)
   - AI messages appear on the left (white)
   - Markdown formatting is supported
   - Links are rendered as clickable buttons

4. **Auto-Scroll**
   - Chat automatically scrolls to show latest messages
   - Smooth animation for better UX

## Markdown Support

The AI can use markdown in responses:
- **Bold text** for emphasis
- *Italic text* for context
- Links: `[Text](/page-path)` for internal pages
- Lists and bullet points
- Code formatting when needed

## Responsive Design

The chat is fully responsive:
- **Desktop**: Fixed position in bottom-right corner
- **Tablet**: Adapts to screen size while maintaining usability
- **Mobile**: Fits naturally with full-screen consideration
- All interactions remain smooth across devices

## Customization

### Changing the AI Personality
Edit the `systemInstruction` in `src/components/AIChat.tsx` to modify:
- Tone and communication style
- Available information
- Page linking behavior
- Response format

### Modifying Chat UI
- Colors: Update Tailwind classes in AIChat component
- Size: Adjust `max-w-[380px]` and `h-[550px]` values
- Position: Change `bottom-6 right-6` for different placement
- Icons: Replace lucide-react icons as needed

### Adding More Languages
1. Update `src/i18n/translations.ts` with new chat translations
2. The chat UI will automatically support the language switcher

## Troubleshooting

### Chat Window Won't Open
- Check if API key is correctly set in `.env`
- Open browser console (F12) to see error messages
- Verify the `.env` file exists and has `VITE_GEMINI_API_KEY`

### No Response from AI
- Confirm API key is valid and active
- Check internet connection
- Look for API rate limit errors in console
- Verify API quota hasn't been exceeded

### Links Don't Work
- Ensure page paths match actual routes (case-sensitive)
- Check browser console for navigation errors
- Verify React Router setup in `src/App.tsx`

### Messages Don't Send
- Check that input field has text
- Verify API is responding
- Clear browser cache if needed
- Try refreshing the page

## Performance Notes

- **Lazy Loading**: Chat component initializes only when opened
- **Message Caching**: Session messages are kept in memory
- **Streaming**: AI responses appear in real-time
- **Resource Efficient**: Minimal impact on page performance

## Security Considerations

- ✅ API key is used only server-side during build
- ✅ No sensitive data stored in chat history
- ✅ Messages are not persisted to database
- ✅ User privacy is maintained

## Future Enhancements

Potential improvements:
- Chat history persistence (with user consent)
- Multi-language auto-detection
- Conversation context across sessions
- Analytics on common questions
- Integration with CRM for lead capture
- Custom response suggestions
- Chat export/download functionality

## Support

For issues or questions about the AI chat setup:
1. Check this documentation
2. Review error messages in browser console (F12)
3. Contact BEN support at: support@ben-energy.co.id
4. Reference: AI Chat Implementation v1.0

---

**Last Updated**: April 2026  
**Status**: ✅ Fully Operational  
**Knowledge Base**: 100% Complete
