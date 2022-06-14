# Meta Service

Meta service updates head tags, such es meta OG tags and document title.

If the page is dynamic **and** it required dynamic data in tags, the service should be called from `store/effects`.
If the page is static or its tags should always be same, it can be called from the component's ngOnInit hook.
