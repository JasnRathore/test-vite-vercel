import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { ReactNode } from "react"


interface ProjectItemInterface {
  title: string
  description: string
  link?: string
  children?: ReactNode
  featured?: boolean
}

export function ProjectItem({
  title,
  description,  
  link,
  children,
  featured = false
}: ProjectItemInterface) {
  
  return (
    <div className={`
      relative p-6 2xl:p-8 bg-card border border-border rounded-xl 
      hover:border-accent transition-all duration-200
      ${featured ? 'border-2 border-accent' : ''}
      h-full flex flex-col
    `}>
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl lg:text-2xl font-bold text-heading tracking-tight">
            {title}
          </h3>
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label={`Visit ${title} project`}
          >
            <ExternalLinkIcon className="size-5" />
          </a>
        </div>
        
        <p className="text-muted mb-6 flex-grow">
          {description}
        </p>
        
        {children && (
          <div className="mt-auto">
            <div className="border-t border-border pt-4">
              <h4 className="text-sm text-muted mb-2">Technologies:</h4>
              <div className="flex flex-wrap gap-3">
                {children}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

