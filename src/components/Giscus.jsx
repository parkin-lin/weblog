import GiscusReact from '@giscus/react'

export default function Giscus() {
  return (
    <div className="w-70% my-0 mx-auto">
      <GiscusReact
        id="comments"
        repo="parkin-lin/weblog"
        repoId="R_kgDOOHL2Sg"
        category="Giscus"
        categoryId="DIC_kwDOOHL2Ss4Cn9YY"
        mapping="url"
        term="Welcome!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="dark"
        lang="en"
        loading="lazy"
      />
    </div>
  )
}
