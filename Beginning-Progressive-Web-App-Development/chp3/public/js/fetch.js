fetch(`${window.origin}/people`)
     .then(response => response.json())
     .then(json => console.log(json));

/**
 * Depending on whether you’re expecting text (response.text()), a blob (response.blob()), or something else.
 */
                                