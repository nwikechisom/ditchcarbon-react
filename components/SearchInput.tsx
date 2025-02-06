/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { JSX } from "react";

export function SearchInput({
  suggestions,
  onSearch,
  value,
  handleSelect,
}: {
  suggestions: string[];
  onSearch: (item: any) => void;
  value: string;
  handleSelect: (item: string) => void;
}) {
  const filteredItems = suggestions.filter(
    (item: any) =>
      value.trim() && item.toLowerCase().includes(value.toLowerCase())
  );

  const highlightMatch = (text: string, searchTerm: string): (string | JSX.Element)[] => {
    if (!searchTerm || !text) return [text];
    
    const searchLower = searchTerm.toLowerCase();
    const textLower = text.toLowerCase();
    const result: (string | JSX.Element)[] = [];
    let lastIndex = 0;
    
    let index = textLower.indexOf(searchLower);
    while (index !== -1) {
      if (index > lastIndex) {
        result.push(text.substring(lastIndex, index));
      }
      
      result.push(
        <span 
          key={`highlight-${index}`} 
          className="bg-yellow-200 dark:bg-yellow-800 font-medium">
          {text.substring(index, index + searchTerm.length)}
        </span>
      );
      
      lastIndex = index + searchTerm.length;
      index = textLower.indexOf(searchLower, lastIndex);
    }
    
    if (lastIndex < text.length) {
      result.push(text.substring(lastIndex));
    }
    
    return result;
  };

  return (
    <div className="w-full max-w-sm relative">
      <div className="relative">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-500" />
        </div>
        <Input
          value={value}
          onChange={onSearch}
          placeholder="Search..."
          className="pl-10"
        />
      </div>

      {filteredItems.length > 0 && (
        <ul className="py-1">
          {filteredItems.length > 0 && (
            <>
              {filteredItems.map((item: string, index: number) => (
                <li
                  key={index}
                  onClick={() => handleSelect(item)}
                  className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                >
                  {highlightMatch(item, value)}
                </li>
              ))}
            </>
          )}
        </ul>
      )}
    </div>
  );
}
