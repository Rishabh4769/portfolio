import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { TERMINAL_FS } from '../data/content';

/* Dossier terminal v2 — a real little machine:
   filesystem (ls/cd/pwd/cat), history, tab-complete,
   decrypt effect, scan easter egg, open → scrolls to case files. */
export default function Terminal() {
  const outRef = useRef(null);
  const inRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const out = outRef.current;
    const inp = inRef.current;
    out.innerHTML = ''; // Clear strict mode / HMR duplicates

    const PROMPT = 'visitor@dossier';
    let cwd = [], hist = [], hi = -1, busy = false, sudoN = 0;

    const esc = (s) => String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
    const nap = (ms) => new Promise((r) => setTimeout(r, ms));
    const print = (html, cls) => {
      const d = document.createElement('div');
      if (cls) d.className = cls;
      d.innerHTML = html;
      out.appendChild(d);
      out.scrollTop = out.scrollHeight;
      return d;
    };
    const promptHtml = () => '<span class="p">' + PROMPT + (cwd.length ? ':~/' + cwd.join('/') : '') + ' $</span>';
    const resolve = (p) => {
      let parts;
      if (p === '~' || p === '~/') parts = [];
      else if (p && p[0] === '~') parts = p.slice(p[1] === '/' ? 2 : 1).split('/');
      else parts = cwd.concat((p || '').split('/'));
      const stack = [];
      for (const s of parts) { if (!s || s === '.') continue; if (s === '..') stack.pop(); else stack.push(s); }
      let node = TERMINAL_FS;
      for (const s of stack) {
        if (node && typeof node === 'object' && s in node) node = node[s];
        else return null;
      }
      return { node, stack };
    };
    const isDir = (n) => n && typeof n === 'object';
    const slowPrint = async (lines, gap) => {
      for (const l of lines) { print(l.h, l.c); await nap(gap || 260); }
    };
    const GLYPHS = '!<>-_\\/[]{}=+*^?#01';
    const decrypt = (el, text) => {
      const step = Math.max(3, Math.ceil(text.length / 24));
      let i = 0;
      const iv = setInterval(() => {
        let s = '';
        for (let k = 0; k < text.length; k++) {
          const ch = text[k];
          s += (k < i || ch === '\n' || ch === ' ') ? ch : GLYPHS[(Math.random() * GLYPHS.length) | 0];
        }
        el.textContent = s;
        i += step;
        if (i >= text.length) { clearInterval(iv); el.textContent = text; }
      }, 30);
    };

    const CMDS = {
      help: () => {
        print('file system — <span class="p">ls · cd · pwd · cat</span> <span class="dim">(explore system)</span><br>recon &amp; ops — <span class="p">nmap · ping · scan · rules · open · stats</span><br>intel &amp; comms — <span class="p">banner · whoami · contact</span><br>tactical — <span class="p">theme · date · echo · sudo · hack · clear</span> <span class="dim">· tab completes · ↑↓ history</span>');
      },
      banner: () => { print('<div class="fileview">╔══════════════════════════════════╗\n║  RISHABH JOSHI — SUBJECT FILE    ║\n║  clearance: public · rev 2026.09 ║\n╚══════════════════════════════════╝</div>'); },
      whoami: () => { print('rishabh_joshi — security-first engineer.<br><span class="dim">builds things that detect bad things.</span>'); },
      pwd: () => { print('/home/visitor' + (cwd.length ? '/' + cwd.join('/') : '')); },
      ls: (a) => {
        const r = resolve(a || '');
        if (!r) { print('ls: no such directory', 'warn'); return; }
        if (!isDir(r.node)) { print(esc(a || '')); return; }
        const names = Object.keys(r.node);
        if (!names.length) { print('<span class="dim">(empty)</span>'); return; }
        print(names.map((n) => isDir(r.node[n]) ? '<span class="p">' + esc(n) + '/</span>' : esc(n)).join('&nbsp;&nbsp;&nbsp;'));
      },
      cd: (a) => {
        if (!a || a === '~') { cwd = []; return; }
        const r = resolve(a);
        if (!r || !isDir(r.node)) { print('cd: no such directory: ' + esc(a), 'warn'); return; }
        cwd = r.stack;
      },
      cat: (a) => {
        if (!a) { print('usage: cat &lt;file&gt;', 'warn'); return; }
        const r = resolve(a);
        if (!r) { print('cat: ' + esc(a) + ': no such file', 'warn'); return; }
        if (isDir(r.node)) { print('cat: ' + esc(a) + ': is a directory', 'warn'); return; }
        decrypt(print('', 'fileview'), r.node);
      },
      scan: async (a) => {
        busy = true;
        const t = a || 'visitor';
        await slowPrint([
          { h: 'resolving <span class="p">' + esc(t) + '</span> .................... <span class="p">[OK]</span>' },
          { h: 'scanning 1024 tcp ports ...', c: 'dim' },
          { h: '22/tcp&nbsp;&nbsp;&nbsp;&nbsp;open&nbsp;&nbsp;&nbsp;&nbsp;ssh' },
          { h: '80/tcp&nbsp;&nbsp;&nbsp;&nbsp;open&nbsp;&nbsp;&nbsp;&nbsp;http' },
          { h: '443/tcp&nbsp;&nbsp;&nbsp;open&nbsp;&nbsp;&nbsp;&nbsp;https' },
          { h: '1337/tcp&nbsp;&nbsp;open&nbsp;&nbsp;&nbsp;&nbsp;curiosity' },
          { h: 'scan complete: 4 open ports, 0 vulnerabilities. <span class="p">[OK]</span>' },
          { h: 'verdict: clean. <span class="dim">for now.</span>' },
        ], 340);
        busy = false;
      },
      nmap: async (a) => {
        busy = true;
        const t = (a || '127.0.0.1').trim();
        print(`Starting Nmap 7.94 ( https://nmap.org ) at ${new Date().toISOString().slice(0, 19)}`);
        await nap(320);
        print(`Nmap scan report for ${esc(t)}<br><span class="dim">Host is up (0.00038s latency). Not shown: 996 closed tcp ports (reset)</span>`);
        await nap(280);
        print(`<div class="fileview">PORT     STATE SERVICE VERSION
22/tcp   open  ssh     OpenSSH 9.6p1
80/tcp   open  http    nginx (reverse proxy)
443/tcp  open  https   nginx (TLSv1.3)
8000/tcp open  http    FastAPI (PLEXUS v3.0 detection core)</div>`);
        await nap(180);
        print('<span class="p">Nmap done: 1 IP address (1 host up) scanned in 0.78 seconds</span>');
        busy = false;
      },
      ping: async (a) => {
        busy = true;
        const target = (a || 'dossier.local').trim();
        print(`PING ${esc(target)} (127.0.0.1): 56 data bytes`);
        for (let seq = 1; seq <= 4; seq++) {
          await nap(260);
          const time = (12 + Math.random() * 9).toFixed(2);
          print(`64 bytes from 127.0.0.1: icmp_seq=${seq} ttl=64 time=${time} ms`);
        }
        await nap(120);
        print(`--- ${esc(target)} ping statistics ---<br><span class="p">4 packets transmitted, 4 packets received, 0.0% packet loss</span>`);
        busy = false;
      },
      rules: () => {
        print(`<div class="fileview"># [PLEXUS INTRUSION DETECTION SIGNATURE]
alert tcp any any -> $HOME_NET any (msg:"ET SCAN Potential SYN Stealth Scan"; flags:S; threshold:type both, track by_src, count 20, seconds 2; classtype:attempted-recon; sid:2000001; rev:1;)

# [KRONOS SIEM DETECTION RULE]
rule: "Brute Force Threshold"
filter: event.category == "auth" and event.outcome == "failure"
aggregation: count() > 5 grouped by source.ip within 60s
action: emit_alert(severity="HIGH", tags=["credential-access", "triage-required"])</div>`);
      },
      theme: (a) => {
        const t = (a || '').toLowerCase().trim();
        if (!['blue', 'green', 'amber', 'red'].includes(t)) {
          print('usage: theme &lt;blue | green | amber | red&gt;', 'warn');
          return;
        }
        if (t === 'blue') {
          document.documentElement.removeAttribute('data-theme');
        } else {
          document.documentElement.setAttribute('data-theme', t);
        }
        print(`CRT phosphor palette shifted to <span class="p">[${esc(t.toUpperCase())}]</span>`);
      },
      stats: () => {
        print('uptime ............ 3 yrs learning<br>cases filed ....... 3<br>tests green ....... 210 <span class="dim">(kronos)</span><br>packets watched ... 1,204/s<br>coffee level ...... <span class="warn">critical</span>');
      },
      open: (a) => {
        const k = (a || '').toLowerCase();
        if (!['plexus', 'kronos', 'netscope'].includes(k)) { print('usage: open &lt;plexus|kronos|netscope&gt;', 'warn'); return; }
        print('opening case file: <span class="p">' + esc(k) + '</span> ... <span class="dim">heading to /operations</span>');
        setTimeout(() => { navigate('/operations'); }, 400);
        setTimeout(() => {
          const target = document.getElementById('case-' + k);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            target.classList.remove('flash'); void target.offsetWidth; target.classList.add('flash');
          }
        }, 900);
      },
      contact: () => { print('github — <span class="p">github.com/Rishabh4769</span><br>linkedin — <span class="p">linkedin.com/in/rishabh-joshi</span><br>email — <span class="p">contact@rishabhjoshi.dev</span>'); },
      signal: () => { CMDS.contact(); },
      date: () => { print(esc(new Date().toString())); },
      echo: (a, args) => { print(esc(args.join(' ')) || ''); },
      sudo: () => { sudoN++; print(sudoN > 1 ? '<span class="warn">still no.</span> <span class="dim">— vero</span>' : '<span class="warn">nice try.</span> <span class="dim">this terminal has no sudoers file. — vero</span>'); },
      hack: async () => {
        busy = true;
        await slowPrint([
          { h: 'trace initiated ...', c: 'dim' },
          { h: 'routing through 7 proxies ...', c: 'dim' },
          { h: '<span class="warn">just kidding.</span> this is a portfolio, not a botnet. try <span class="p">scan</span> or <span class="p">nmap</span>.' },
        ], 420);
        busy = false;
      },
      exit: () => { print('<span class="dim">there is no escape. the dossier is everywhere.</span>'); },
      clear: () => { out.innerHTML = ''; },
    };
    const NAMES = Object.keys(CMDS);

    const complete = () => {
      const val = inp.value, parts = val.split(/\s+/);
      if (parts.length <= 1) {
        const frag = (parts[0] || '').toLowerCase();
        const m = NAMES.filter((n) => n.startsWith(frag));
        if (m.length === 1) inp.value = m[0] + ' ';
        else if (m.length > 1) print('<span class="dim">' + m.join('&nbsp;&nbsp;') + '</span>');
        return;
      }
      const cmd = parts[0].toLowerCase(), frag = parts[parts.length - 1];
      if (cmd === 'open') {
        const m = ['plexus', 'kronos', 'netscope'].filter((n) => n.startsWith(frag.toLowerCase()));
        if (m.length === 1) { parts[parts.length - 1] = m[0]; inp.value = parts.join(' '); }
        return;
      }
      if (cmd === 'theme') {
        const m = ['blue', 'green', 'amber', 'red'].filter((n) => n.startsWith(frag.toLowerCase()));
        if (m.length === 1) { parts[parts.length - 1] = m[0]; inp.value = parts.join(' '); }
        else if (m.length > 1) print('<span class="dim">' + m.join('&nbsp;&nbsp;') + '</span>');
        return;
      }
      if (!['ls', 'cd', 'cat'].includes(cmd)) return;
      let dirPart = '', base = frag;
      const slash = frag.lastIndexOf('/');
      if (slash >= 0) { dirPart = frag.slice(0, slash + 1); base = frag.slice(slash + 1); }
      const r = resolve(dirPart || '');
      if (!r || !isDir(r.node)) return;
      const opts = Object.keys(r.node).filter((n) => n.toLowerCase().startsWith(base.toLowerCase()));
      if (opts.length === 1) { parts[parts.length - 1] = dirPart + opts[0] + (isDir(r.node[opts[0]]) ? '/' : ''); inp.value = parts.join(' '); }
      else if (opts.length > 1) print('<span class="dim">' + opts.join('&nbsp;&nbsp;') + '</span>');
    };

    const onKey = async (e) => {
      if (e.key === 'Tab') { e.preventDefault(); complete(); return; }
      if (e.key === 'ArrowUp') { e.preventDefault(); if (hist.length) { hi = hi < 0 ? hist.length - 1 : Math.max(0, hi - 1); inp.value = hist[hi]; } return; }
      if (e.key === 'ArrowDown') { e.preventDefault(); if (hi >= 0) { hi++; inp.value = hi >= hist.length ? '' : hist[hi]; if (hi >= hist.length) hi = -1; } return; }
      if (e.key !== 'Enter') return;
      const raw = inp.value; inp.value = ''; hi = -1;
      const trimmed = raw.trim();
      print(promptHtml() + ' <span class="cmd-echo">' + esc(raw) + '</span>');
      if (!trimmed || busy) return;
      hist.push(trimmed);
      const sp = trimmed.split(/\s+/), c = sp[0].toLowerCase(), args = sp.slice(1);
      const fn = CMDS[c];
      if (!fn) { print('command not found: ' + esc(c) + ' — try <span class="p">help</span>.', 'warn'); return; }
      try { await fn(args.join(' '), args); } catch (err) { busy = false; }
    };

    inp.addEventListener('keydown', onKey);
    const focus = () => inp.focus();
    const win = out.closest('.term-window');
    if (win) win.addEventListener('click', focus);

    (async () => {
      print('<span class="dim">dossier terminal v2.0 — clearance: public</span>');
      await slowPrint([
        { h: 'establishing secure channel ......... <span class="p">[OK]</span>' },
        { h: 'decrypting subject file ............. <span class="p">[OK]</span>' },
      ], 320);
      print('<span class="dim">type <span class="p">help</span> — or just <span class="p">ls</span> and snoop around.</span>');
    })();

    return () => {
      inp.removeEventListener('keydown', onKey);
      if (win) win.removeEventListener('click', focus);
    };
  }, [navigate]);

  return (
    <div className="term-window">
      <div className="term-titlebar">
        <i /><i /><i /><span>dossier — secure shell</span>
      </div>
      <div className="term-body" ref={outRef} />
      <div className="term-line">
        <span className="p">visitor@dossier $</span>
        <input ref={inRef} id="termInput" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" aria-label="terminal input" />
      </div>
    </div>
  );
}
