let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/Desktop/portfolio
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +1 src/app/components/timeline/timeline.html
badd +191 src/assets/json/texts_en.json
badd +1 README.md
argglobal
silent! argdel *
edit src/app/components/timeline/timeline.html
set splitbelow splitright
wincmd _ | wincmd |
vsplit
wincmd _ | wincmd |
vsplit
2wincmd h
wincmd w
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winminheight=1 winminwidth=1 winheight=1 winwidth=1
exe 'vert 1resize ' . ((&columns * 64 + 97) / 194)
exe 'vert 2resize ' . ((&columns * 64 + 97) / 194)
exe 'vert 3resize ' . ((&columns * 64 + 97) / 194)
argglobal
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=3
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 11 - ((10 * winheight(0) + 20) / 41)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
11
let s:c = 50 - ((20 * winwidth(0) + 32) / 64)
if s:c > 0
  exe 'normal! ' . s:c . '|zs' . 50 . '|'
else
  normal! 050|
endif
wincmd w
argglobal
if bufexists('README.md') | buffer README.md | else | edit README.md | endif
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=3
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 35 - ((11 * winheight(0) + 20) / 41)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
35
normal! 0
wincmd w
argglobal
if bufexists('src/assets/json/texts_en.json') | buffer src/assets/json/texts_en.json | else | edit src/assets/json/texts_en.json | endif
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=7
setlocal fml=1
setlocal fdn=20
setlocal fen
1
normal! zo
33
normal! zo
43
normal! zo
46
normal! zo
104
normal! zo
106
normal! zo
147
normal! zo
149
normal! zo
162
normal! zo
164
normal! zo
165
normal! zo
172
normal! zo
173
normal! zo
215
normal! zo
216
normal! zo
268
normal! zo
270
normal! zo
290
normal! zo
292
normal! zo
293
normal! zo
318
normal! zo
let s:l = 210 - ((22 * winheight(0) + 20) / 41)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
210
normal! 08|
wincmd w
3wincmd w
exe 'vert 1resize ' . ((&columns * 64 + 97) / 194)
exe 'vert 2resize ' . ((&columns * 64 + 97) / 194)
exe 'vert 3resize ' . ((&columns * 64 + 97) / 194)
tabnext 1
if exists('s:wipebuf') && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 winminheight=1 winminwidth=1 shortmess=filnxtToOc
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
