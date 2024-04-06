<template>
    <div class="min-h-screen flex flex-col">
      <Header />
  
      <main class="flex-grow">
        <slot /> 
      </main>
      <BottomNav />
      <Footer />
    </div>
  </template>