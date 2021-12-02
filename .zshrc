code () { VSCODE_CWD="$PWD" open -n -b "com.microsoft.VSCode" --args $* ;}

# Load version control information
autoload -Uz vcs_info
autoload -U colors && colors
precmd() { vcs_info }

# Format the vcs_info_msg_0_ variable
zstyle ':vcs_info:git:*' formats '(%b)'
 
# Set up the prompt (with git branch name)
setopt PROMPT_SUBST
PS1='%{$fg[cyan]%}%n %{$fg[magenta]%}%~/%{$fg[green]%}${vcs_info_msg_0_} %{$fg[red]%}$ %{$reset_color%}%'

