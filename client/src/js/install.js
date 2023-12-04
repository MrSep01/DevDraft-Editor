const butInstall = document.getElementById('buttonInstall');

// Before install prompt event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the mini-infobar from appearing on mobile
  event.preventDefault();
  
  // Stash the event so it can be triggered later.
  window.deferredPrompt = event;
  
  // Remove the 'hidden' class from the button.
  butInstall.classList.remove('hidden');
});

// Install button click event
butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;
  
  if (!promptEvent) {
    return;
  }
  
  // Show the install prompt
  promptEvent.prompt();
  
  // Wait for the user to respond to the prompt
  const { outcome } = await promptEvent.userChoice;
  
  // Optionally, send analytics event with outcome of user choice
  console.log(`User response to the install prompt: ${outcome}`);
  
  // We've used the prompt, and can't use it again, discard it
  window.deferredPrompt = null;
  
  // Hide the install button
  butInstall.classList.add('hidden');
});

// App installed event
window.addEventListener('appinstalled', (event) => {
  // Hide the install button
  butInstall.classList.add('hidden');
  
  // Clear the deferredPrompt so it can be garbage collected
  window.deferredPrompt = null;
  
  // Optionally, send analytics event to indicate successful installation
  console.log('PWA was installed');
});