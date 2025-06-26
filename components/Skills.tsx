"use client";
import dynamic from "next/dynamic";
const IconCloud = dynamic(() => import('@/components/ui/IconCloud').then(mod => mod.default), { ssr: false });

const slugs = [
"java",
"javascript",
"typescript",
"python",
"react",
"angular",
"redux",
"rxjs",
"html5",
"css3",
"bootstrap",
"springboot",
"nodedotjs",
"express",
"graphql",
"restapi",
"oauth",
"jwt",
"docker",
"kubernetes",
"apachespark", // use if showing data/streaming
"kafka",
"rabbitmq",
"googlecloud",
"amazons3",     // part of AWS logos
"aws",
"azuredevops",
"mysql",
"postgresql",
"mongodb",
"couchbase",
"redis",
"oracle",
"microsoftsqlserver", // use if needed
"terraform",
"jenkins",
"gitlab",
"github",
"bitbucket",
"junit5",     // if your icon system supports test libs
"vscode",
"postman",
"figma",
"linux",

  
];

function Skills() {
  return (
    <div className="my-10 py-10">
      <h1 className="heading">
        Skills &amp;{" "}
        <span className="text-purple">Technologies</span>
      </h1>
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default Skills;
