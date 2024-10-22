local function LoadingScreenFullyLoaded()
    SendLoadingScreenMessage(json.encode({ fullyLoaded = true }))
    Wait(2000)
    ShutdownLoadingScreenNui()
    ShutdownLoadingScreen()
end

exports('LoadingScreenFullyLoaded', LoadingScreenFullyLoaded)