///try catch is for handeling errors


async function f() {

    try {
      let response = await fetch('/no-user-here');     //await means what we wants
      let user = await response.json();
    } catch(err) {
      alert(err);
    }
  }
  