import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, Music } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface MusicConfigProps {
  onSelectTrack: (track: string) => void;
  currentTrack: string;
}

// Music tracks available
const musicTracks = [
  { id: "dilka", name: "Dilka Jo hal hai", path: "/dilka_jo_hal_hai.mp3" },
];

export const MusicConfig = ({ onSelectTrack, currentTrack }: MusicConfigProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectTrack = (trackId: string) => {
    const track = musicTracks.find(t => t.id === trackId);
    if (track) {
      onSelectTrack(track.path);
    }
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      {isOpen ? (
        <Card className="p-4 bg-card/90 backdrop-blur-md shadow-lg border-primary/20 animate-in fade-in slide-in-from-right-5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Music className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-medium">Music Settings</h3>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-7 w-7 rounded-full p-0"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </Button>
          </div>
          
          <div className="space-y-3">
            <div>
              <label className="text-xs text-muted-foreground block mb-1">
                Select Background Music
              </label>
              <Select 
                onValueChange={handleSelectTrack}
                defaultValue={musicTracks.find(t => t.path === currentTrack)?.id || "none"}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select music" />
                </SelectTrigger>
                <SelectContent>
                  {musicTracks.map(track => (
                    <SelectItem key={track.id} value={track.id}>
                      {track.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <p className="text-xs text-muted-foreground">
              Use the music controls at the bottom right to adjust volume or pause.
            </p>
          </div>
        </Card>
      ) : (
        <Button
          variant="outline"
          size="sm"
          className="bg-card/70 backdrop-blur-sm shadow-sm"
          onClick={() => setIsOpen(true)}
        >
          <Settings className="h-4 w-4 mr-2" />
          Music
        </Button>
      )}
    </div>
  );
};
