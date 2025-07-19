import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Here you would typically send the message to your chat system
      console.log("Message sent:", message);
      setMessage("");
    }
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-4 w-80 max-h-96 shadow-elegant z-50 animate-fade-in">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm">Chat with GARMÉA</CardTitle>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-6 w-6"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-muted/50 rounded-lg p-3">
              <p className="text-sm text-muted-foreground">
                👋 Hi! I'm here to help you find the perfect piece. What can I assist you with today?
              </p>
            </div>
            
            <form onSubmit={handleSendMessage} className="flex space-x-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 text-sm"
              />
              <Button type="submit" size="icon" className="h-9 w-9">
                <Send className="h-4 w-4" />
              </Button>
            </form>
            
            <div className="text-xs text-muted-foreground">
              Typically replies in under 5 minutes
            </div>
          </CardContent>
        </Card>
      )}

      {/* Floating Chat Button */}
      <Button
        className="fixed bottom-4 right-4 h-14 w-14 rounded-full shadow-elegant bg-gradient-button hover:opacity-90 transition-opacity z-40 animate-float"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </>
  );
};

export default FloatingChat;