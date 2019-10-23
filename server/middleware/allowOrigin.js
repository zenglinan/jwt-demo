async function allowOrigin(ctx, next){
  ctx.set({'Access-Control-Allow-Origin': '*'})
  ctx.set({'Access-Control-Allow-Headers': 'authentication, Content-Type'})
  ctx.set({'Access-Control-Max-Age': 600})
  if(ctx.request.method === 'OPTIONS'){
    ctx.body = {
      allow: ['GET', 'POST']
    }
  }
  await next()
}

module.exports = allowOrigin