"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export const langs = [
    { 
      value: "c", 
      label: "C" 
    },
    { 
      value: "csharp", 
      label: "C#" 
    },
    { 
      value: "cpp", 
      label: "C++" 
    },
    { 
      value: "go", 
      label: "Go" 
    },
    { 
      value: "java", 
      label: "Java" 
    },
    { 
      value: "js", 
      label: "JavaScript" 
    },
    { 
      value: "kotlin", 
      label: "Kotlin" 
    },
    {
      value: "php", 
      label: "PHP" 
    },
    { 
      value: "python", 
      label: "Python" 
    },
    { 
      value: "swift", 
      label: "Swift" 
    }
]

export function Combobox({ val, func }: { val: string; func: (value: string) => void }) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState(val)

    React.useEffect(() => {
        if (value) {
            func(value);
        }
    }, [func, value])

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {value
                        ? langs.find((lang) => lang.value === value)?.label
                        : "Select language"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search language..." />
                    <CommandList>
                        <CommandEmpty>No language found.</CommandEmpty>
                        <CommandGroup>
                            {langs.map((lang) => (
                                <CommandItem
                                    key={lang.value}
                                    value={lang.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === lang.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {lang.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
