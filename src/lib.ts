export interface ThemeInterface {
	dark: boolean
	set: any
}


export function openLink(link: string) {
	window.open(link,"_blank");
}

export function copyToClipboard(content: string) {
  navigator.clipboard.writeText(content).then(() => {
  }).catch(err => {
  	alert("Copying to Clipboard Failed: " + err);
  });
}

export function getMode(): boolean {
		const response = window.matchMedia('(prefers-color-scheme: dark)').matches;
	  return !response;
}
