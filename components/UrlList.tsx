import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CopyIcon, EyeIcon } from "lucide-react";

export const UrlList = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Recent URLs</h2>
      <ul className="space-y-2">
        <li className="flex justify-between items-center gap-2">
          <Link
            href="http://localhost:3000/"
            target="_blank"
            className="text-blue-500"
          >
            http://localhost:3000/
          </Link>
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:bg-muted"
            >
              <CopyIcon className="w-4 h-4" />
              <span className="sr-only">Copy URL</span>
            </Button>
            <span className="flex items-center">
              <EyeIcon className="w-4 h-4" />
              100 views
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};
