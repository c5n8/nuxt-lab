export default async () => {
  const [{ default: vue }, { default: compositionApi }] = await Promise.all([
    import('vue'),
    import('@vue/composition-api'),
  ])

  vue.use(compositionApi)
}
