// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

require("xterm/css/xterm.css")
import { Terminal } from "xterm"
import { AttachAddon  } from 'xterm-addon-attach';

Rails.start()
Turbolinks.start()
ActiveStorage.start()

document.addEventListener("turbolinks:load", () =>{
  var term = new Terminal();
  term.open(document.getElementById('terminal'));
  const socket = new WebSocket('ws://localhost:5020/containers/b6bb364f6d06/attach/ws?stream=1&stdout=1');
  const attachAddon = new AttachAddon(socket);

  // Attach the socket to term
  term.loadAddon(attachAddon);
  term.write("Hello from \x1B[1;3;31mxterm.js\n\x1B[0m $ ");
})

